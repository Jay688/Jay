//构造函数修改
constructor(){
      super();
    }
//自动刷新函数
Refresh(){
      setInterval(() => {
        this.Get_Temp();
        }, 10000);
      }