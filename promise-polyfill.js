const user = {
    get: function (id, name) {
        console.log('Getting user...');
        setTimeout(() => {
            const user = { id: id, gitHubUsername: name };
            if (id === 0) {
                console.log("Executing captured success callback.");
                this.failureCb({message: "Something went wrong."});
            }
            else {
                console.log("Executing captured success callback.");
                this.successCb(user);
            }
        }, 2000);

        return this;
    },
    success: function (cb) {
        console.log('Capturing success callback');
        this.successCb = cb;

        return this;
    },
    failure: function (cb) {
        console.log('Capturing failure callback');
        this.failureCb = cb;
        
        return this;
    },
    successCb: null,
    failureCb: null,
};

user.get(12, 'whatever')
    .success(function(user){
        console.log("success!", user);
    })
    .failure((error) => console.log('failure!', error));
