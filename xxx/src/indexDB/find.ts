/**
 * 使用游标查询数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexKey 查询的索引的键值
 * @param {string} index 查询的索引值
 **/
export const getIndexData = function (
  db: any,
  storeName: string,
  indexKey: string,
  index: string
) {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject("数据库不存在或没有初始化");
    }
    const keyRange = IDBKeyRange.only(index);
    const req = db
      .transaction([storeName], "readonly")
      .objectStore(storeName) // 仓库对象
      .index(indexKey)
      .openCursor(keyRange, "next");
    // 操作成功
    req.onsuccess = function (e: { target: { result: any } }) {
      resolve({
        code: 0,
        success: true,
        data: e?.target?.result,
        msg: "数据查询成功!",
      });
    };
    // 操作失败
    req.onerror = function () {
      const data = {
        code: -1,
        success: false,
        data: null,
        msg: "数据查询失败!",
      };
      resolve(data);
    };
  });
};