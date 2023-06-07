i = 1
print("<tr>")
while i < 65:
    print("i =", i, "i % 8 =", i % 8)
    if i % 8 == 0:
        print("</tr>")
        print("<tr>")
    i += 1