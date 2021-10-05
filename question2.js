//*******Question 2: Promises*******
const resolvedPromise = () => {
    setTimeout(() => {
        let success = {"message": "delayed success!"}
        console.log(success);
    },500)
}

const delayedException = () => {
    setTimeout(() => {
        try{
            throw new Error('error: delayed exception!')
        }catch (e){
            console.error(e);
        }
    },500)
}

Promise.resolve()
    .then(resolvedPromise)

Promise.reject()
    .catch(delayedException)
