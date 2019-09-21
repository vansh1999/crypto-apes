# #Problem Statement-

# A two-dimensional array (matrix) of potentially unequal height and width containing only 0s and 1s. Here 1 represents choco-chip and 0 is not a choco-chip.
# Problem is to find the number of choco-chips in the given matrix.
# A choco chip consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally). The number of adjacent 1s forming a line determines the size of the choco-chip.
# Write a function that returns an array of the sizes of all different choco-chips present in the input matrix.

# #points to remember-
# 1 . If a 1 is already considered in a choco-chip, it cannot be considered again as indicated by a red line in the above image.
# 2 . Diagonal elements are not considered as an adjacent element as indicated by a red line in the above image.

# image
# https://miro.medium.com/max/488/1*SgcqAN2Z6aA2boKwABhhBw.png
# #Remembert-
# Choco-chips for the above problem(image) is indicated by green lines and the array containing solution is written in green.


# code here -- >

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


