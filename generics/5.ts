interface ArticleInterface<B,C>{
    title:string,
    isLock:B,
    comments:C[]
}

type CommentType ={
    content:string
    author:string
}

const article:ArticleInterface<boolean,CommentType>={
    title:'open.com',
    isLock:true,
    comments:[{content:'this is a  content',author:'luke'}]
}