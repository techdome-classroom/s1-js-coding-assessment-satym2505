def isValid(s: str) -> bool:
    # Dictionary to hold the matching pairs
    matching = {')': '(', '}': '{', ']': '['}
    
    # Stack to keep track of opening brackets
    stack = []
    
    for char in s:
        if char in matching:
            # Pop from stack if it's not empty, else use a dummy value '#'
            top_element = stack.pop() if stack else '#'
            # Check if the current closing matches the latest opening bracket
            if matching[char] != top_element:
                return False
        else:
            # It's an opening bracket, push to stack
            stack.append(char)
    
    # If stack is empty, all brackets were matched; otherwise, return False
    return not stack
