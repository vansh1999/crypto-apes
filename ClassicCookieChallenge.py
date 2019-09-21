
t = int(input("Enter the number of rows: "))
h = int(input("Enter the number of cols: "))

# array for appending zeros
l = []
j = []
# array for appending cookie lenghts
q = []

# appending zeros first row

for i in range(0,h+2):
    j.append(0)

l.append(j)

# input rows and appending zeros at corners

for i in range(0,t):
    p = list(map(int , input().split()))
    p.insert(0,0)
    p.insert(h+2 , 0)
    l.append(p)

# append zeros at last row
l.append(j)


# function for counting cookie lenght or 1's

def adj(r,c,cn):
    l[r][c] = 0
    cn = cn + 1

    if(l[r+1][c] == 1):
        cn = adj(r+1 , c , cn)
    if (l[r][c+1] == 1):
        cn = adj(r , c+1 , cn)
    if (l[r-1][c] == 1):
        cn = adj(r-1 , c , cn)
    if (l[r][c-1] == 1):
        cn = adj(r , cn-1 , cn)

    return cn

# checking 1 in rows and cols

for p in range(0 , t+2):
    for k in range(0 , h+2):
        if(l[p][k] == 0):
            continue
        else:
            cn = 0
            q.append(adj(p,k,cn))
print(q)


