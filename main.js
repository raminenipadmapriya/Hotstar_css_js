body{
    margin:0;
}

#movies{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap:10px
    
}


#movies >div >img{
    width: 100px;
    height: 100px;
}

#navbar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #0f1014;
    color:white
}

#lhs{
    display: flex;
    gap: 10px;
}