const root = function () {
  const environment = plus.android.importClass("android.os.Environment");
  return environment.getExternalStorageDirectory();
}
/**
 * 创建文件夹
 * @return {boolean} flase=失败（已存在、操作失败），true=成功
 */
const mkdirs = function (path = '') {
  plus.android.requestPermissions([//必须用户授权，在mainifest中配置无效
    'android.permission.WRITE_EXTERNAL_STORAGE',
    'android.permission.READ_EXTERNAL_STORAGE',
    'android.permission.INTERNET',
    'android.permission.ACCESS_WIFI_STATE'
  ], error => {
    const File = plus.android.importClass('java.io.File');
    let file = new File(path);
    if (!file.exists()) {
      return file.mkdirs();
    }
    return false;
  }, success => {
    uni.showToast({
      title: '无法获取权限，文件下载将出错！',
      icon: 'none',
    })
  })
}
    
const Download = function(url,fileName) {
    let dtask = plus.downloader.createDownload(
      url,
      {
        //本地路径开头使用file://，跟上手机文件本地目录storage/emulated/0，就是用户文件管理器能看到的了，之后我创建微垠作为文件夹，后缀是用于文件命名和格式修改，大家可以使用变量。
        filename: "file://storage/emulated/0/chaojiai/" + fileName //利用保存路径，实现下载文件的重命名
      }, 
      function(d, status) {
        //d为下载的文件对象
        if (status == 200) {
          uni.showToast({
          	title:'下载成功',
          	duration:2000
          })
		  setTimeout(function(){
			  let fileSaveUrl = plus.io.convertLocalFileSystemURL(d.filename);
			  plus.runtime.openFile(d.filename); //选择软件打开文件
		  },2000);
		  
        } else {
          //下载失败
          plus.downloader.clear(); //清除下载任务
      }
    }
  )
  dtask.start();
}

export default {
  root,
  mkdirs,
  Download,
}