class Solution:
    def findUnion(self, a, b):
        # code here 
        unionArr=[]
        n1=len(a)
        n2=len(b)
        i=0 
        j=0
        while (i<n1 and j<n2):
            if a[i]==b[j]:
                if (not unionArr or a[i] != unionArr[-1]):
                    unionArr.append(a[i]) 
                i+=1 
                j+=1
            elif a[i]<b[j]:
                if (not unionArr or a[i] != unionArr[-1]):
                    unionArr.append(a[i]) 
                i+=1 
            else:
                if (not unionArr or b[j] != unionArr[-1]):
                    unionArr.append(b[j]) 
                j+=1 
                
        while (j<n2):
            if (not unionArr or b[j] != unionArr[-1]):
                    unionArr.append(b[j]) 
            j+=1 
        while(i<n1):
            if (not unionArr or a[i] != unionArr[-1]):
                    unionArr.append(a[i]) 
            i+=1
        return unionArr
 
