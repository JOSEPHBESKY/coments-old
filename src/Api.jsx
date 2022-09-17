export const getComments=async()=>{
    return[
        {id:1,
        body:"first coment",
        username:"jose",
        suerId:"1",
        parentId:null,
        createAt:new Date().toISOString()
        },
        {id:2,
            body:"second commant",
            username:"besky",
            suerId:"2",
            parentId:null,
            createAt:new Date().toISOString()
            },
            {id:3,
                body:"first comment first hild",
                username:"virat",
                suerId:"2",
                parentId:"1",
                createAt:new Date().toISOString()
                },
                {id:4,
                    body:"second commant scond child",
                    username:"jb",
                    suerId:"2",
                    parentId:"2",
                    createAt:new Date().toISOString()
                    },
    ]
}

export const createComment=async (text,parentId=null)=>{
    return{
        id:Math.random().toString(36).substring(2,9),
        body:text,
        parentId,
        suerId:"1",
        username:"jose",
        createAt:new Date().toISOString()
    
    }
}