

arr = [66,57,54,53,64,52,59]

n = len(arr)

for i in range(1,n):
    for j in range(n - i):

        if arr[j] > arr[j+1]:
            arr[j] , arr[j+1] = arr[j+1], arr[j]


# best score is least time so , instead so 66 best is first element of array
print(arr[0])

