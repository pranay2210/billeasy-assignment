exports.subset = (arr,N,K) =>{
    let f = new Array(K);
    for(let i=0;i<K;i++)
    {
        f[i]=0;
    }
     
    for (let i = 0; i < N; i++)
        f[arr[i] % K]++;
   
    if (K % 2 == 0)
        f[K/2] = Math.min(f[K/2], 1);
   
    let res = Math.min(f[0], 1);
   
    for (let i = 1; i <= K/2; i++)
        res += Math.max(f[i], f[K-i]);
   
    return res;
}