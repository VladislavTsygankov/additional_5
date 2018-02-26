module.exports = function check(str, bracketsConfig) {
    var i =0;
    var j=0;
    var arr = str.split('');
    var koll = arr.length/2;
    for(var k=0; k<koll;k++)
    {
        j=0;
        for(var j=0;j<bracketsConfig.length;j++)
        {
            var arrtemp = bracketsConfig[j];
            i=0;
            while(i<arr.length)
            {
                if(arr[i]==arrtemp[0] && arr[i+1]==arrtemp[1])
                {
                    arr.splice(i,2);
                    i=0;
                }
                else i++;
            }

        }
    }

    if (arr.length>0)
    {
        return false;
    }
    else{
        return true;
    }
  // your solution
}
