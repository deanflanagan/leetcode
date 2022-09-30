class Solution:
    def unique_paths(self, m: int, n: int) -> int:
        row = [1] * n  # BOTTOM ROW

        # OTHER ROWS
        for i in range(m - 1):
            new_row = [1] * n 
            # its minus 2 because its second last. Last is edge which is always 1
            for j in range(n - 2, -1, -1):
                new_row[j] = new_row[j + 1] + row[j]
            row = new_row
        return row[0] 
