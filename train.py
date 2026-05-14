# MIT ALGORITHM TASK I-TASK

def majority_element(arr):
    return max(set(arr), key=arr.count)


print(majority_element([1, 2, 3, 4, 5, 4, 3, 4]))  # 4]
