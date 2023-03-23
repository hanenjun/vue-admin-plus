function emptyAction() {
    // 警告提示，当前使用的是空action
    console.warn('current execute action is empty');
}
// 设置一个用于通信的 action类

class Action {
    actions = {
        onGlobalStateChange: emptyAction,
        setGlobalState: emptyAction
    }
    // 默认为空Action

    // 设置actions
    setActions(actions:any) {
        this.actions = actions
    }
    // 映射
    onGlobalStateChange(...args: []) {
        return this.actions.onGlobalStateChange(...args)
    }
    // 映射
    setGlobalState(...args: []) {
        console.log(args, 'args');
        return this.actions.setGlobalState(...args)
    }
}
const actions = new Action()
export default actions
