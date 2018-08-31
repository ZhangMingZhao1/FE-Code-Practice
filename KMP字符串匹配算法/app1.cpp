void makeNext()
{
    int q,k;
    int m = strlen(p);
    nextt[0] = 0;
    for (q = 1,k = 0; q < m; ++q)
    {
        while(k > 0 && p[q] != p[k])
            k = nextt[k-1];
        if (p[q] == p[k])
        {
            k++;
        }
        nextt[q] = k;
    }
}
 
void kmp()
{
    int n,m;
    int i,q;
    n = strlen(t);
    m = strlen(p);
    makeNext();
    for (i = 0,q = 0; i < n; ++i)
    {
        while(q > 0 && p[q] != t[i])
            q = nextt[q-1];
        if (p[q] == t[i])
        {
            q++;
        }
        if (q == m)
        {
            cnt++;
            //return i-m+1;
        }
    }
}
