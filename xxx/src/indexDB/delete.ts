/**
 * 删除数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} key 数据主键
 **/
export const deleteData = function (db: any, storeName: string, key: string) {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject("数据库不存在或没有初始化");
    }
    const req = db
      .transaction([storeName], "readwrite")
      .objectStore(storeName) // 仓库对象
      .delete(key);
    // 操作成功
    req.onsuccess = function (e: { target: { result: any } }) {
      resolve({
        code: 0,
        success: true,
        data: e?.target?.result,
        msg: "数据删除成功!",
      });
    };
    // 操作失败
    req.onerror = function () {
      const data = {
        code: -1,
        success: false,
        data: null,
        msg: "数据删除失败!",
      };
      resolve(data);
    };
  });
};