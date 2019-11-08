import * as mobx from 'mobx';

// 禁止在 action 外直接修改 state 
mobx.configure({ enforceActions: "observed"});
const { observable, action, computed, runInAction } = mobx;

class Home {
  @observable
  public count = 0;

  @observable
  public data = {
    time: '2019-11-08'
  };

  @computed
  public get getTime() {
    return this.data.time;
  }

  @action
  public setCount = (_count: number) => {
    this.count = _count;
  }

  @action
  public setCountAsync = (_count: number) => {
    setTimeout(() => {
      runInAction(() => {
        this.count = _count;
      })
    }, 1000);
  }
}

const homeStore = new Home();
export type homeStoreType = typeof homeStore;
export default homeStore;
