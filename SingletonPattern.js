// Singleton pattern is a creational design pattern. It is helpful when we need to restrict the instance of object
// to only one.

//This program is to have a single instance of process manager. There can be many processes but there should
//only be one instance of process manager.

function process(state){
    this.state = state;
}

const Singleton = (function(){
    function ProcessManager(){
        this.numOfProcess = 0
    }
    
    let pManager;
    
    function createProcessManager(){
        pManager = new ProcessManager()
        return pManager;
    }
    
    return {
        getProcessManager: ()=>{
            if(!pManager)
                pManager = createProcessManager();
            return pManager;
        }
    }
})()