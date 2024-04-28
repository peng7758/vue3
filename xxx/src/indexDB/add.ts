/**
 * 新增数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {object} dataConfig 添加的数据集合
 **/
export const addData = function (db: any, storeName: string, dataConfig: any) {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject("数据库不存在或没有初始化");
    }
    if (!dataConfig || !dataConfig.value) {
      reject("value是必传项，参照格式{[keyPath]:'key',value:'value'}");
    }
    const req = db
      .transaction([storeName], "readwrite")
      .objectStore(storeName) // 仓库对象
      .add(dataConfig);
    // 操作成功
    req.onsuccess = function () {
      resolve({ code: 0, success: true, data: null, msg: "数据写入成功!" });
    };
    // 操作失败
    req.onerror = function () {
      const data = {
        code: -1,
        success: false,
        data: null,
        msg: "数据写入失败!",
      };
      resolve(data);
    };
  });
};