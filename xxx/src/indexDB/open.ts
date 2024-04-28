/**
 * 打开/创建数据库
 * @param {object} dbName 数据库的名字
 * @param {string} storeName 仓库名称
 * @param {string} version 数据库的版本
 * @param {string} keyPath 主键键值，不传就自动创建主键
 * @param {Array} index 索引数组
 * @return {object} 该函数会返回一个数据库实例
 */
type StoreOptions = {
  autoIncrement: boolean;
  keyPath?: string;
};
export const openDB = function (
  dbName: string,
  version: number,
  storeName: string,
  keyPath?: string,
  index?: Array<any[]> | undefined
) {
  return new Promise((resolve, reject) => {
    //  兼容浏览器
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { webkitIndexedDB, indexedDB, mozIndexedDB, msIndexedDB } = window;
    const indexDB = indexedDB || mozIndexedDB || webkitIndexedDB || msIndexedDB;
    let db = null;
    const request = indexDB.open(dbName, version);
    // 操作成功
    request.onsuccess = function (event: any) {
      db = event?.target?.result; // 数据库对象
      resolve({ code: 0, success: true, data: db, msg: "数据库打开成功!" });
    };
    // 操作失败
    request.onerror = function () {
      resolve({ code: -1, success: false, data: null, msg: "数据库打开失败!" });
    };
    // 创建表和索引
    request.onupgradeneeded = function (event: any) {
      // 数据库创建或升级的时候会触发
      db = event?.target?.result; // 数据库对象
      const storeOptions: StoreOptions = {
        autoIncrement: true,
      };
      if (keyPath && keyPath !== "") {
        storeOptions.autoIncrement = false;
        storeOptions.keyPath = keyPath;
      }
      // 创建表
      if (!db.objectStoreNames.contains(storeName)) {
        const store = db.createObjectStore(storeName, storeOptions);
        // 创建索引
        // indexName索引列名称
        // indexKey索引键值
        if (index && index.length > 0) {
          index.forEach((item: any) => {
            if (
              !item.indexName ||
              !item.indexKey ||
              item.options.unique === undefined
            ) {
              reject(
                "索引格式错误，请参照格式{indexName:'indexName',indexKey:'indexKey',{unique: false}}"
              );
            }
            store.createIndex(item.indexName, item.indexKey, item.options);
          });
        }
      }
    };
  });
};