const expenserefund=[
    {description:'notes',amount:200,year:2023},
    {description:'snacks',amount:-500,year:2023},
    {description:'book',amount:2000,year:2023},
    {description:'gifts',amount:1500,year:2024},
    {description:'fitness',amount:100,year:2024}
]
let total=0
const cutoffdate=2024
for(let i=0;i<expenserefund.length;i++){
    const r=expenserefund[i]

if(r.year>=cutoffdate){
console.log('reached cutoff date,exiting loop')
break
}
if(r.amount<0){
    console.log(`skipping ${r.description} due to refund`)
    continue
}
total+=r.amount
}
console.log(`total amount apent on items in 2023:$${total}`)

