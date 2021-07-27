        console.log("Hello");
        // universal Variables
        
        var studentYes=true;
        var studentNo=false;
        // client 1
        var userName1; //initialization of var
        userName1="Cam"; //declaration of var/assign
        var userAge1=30;
        var userAddress1="123 Easy St";
        // client 2
        var userName2="Jim";
        var userAge2=35;
        var userAddress2="546M Main St";
        // client 3
        var userName3="Tim";
        var userAge3=65;
        var userAddress3="68541 S 65th Ave";
        // client 4
        var userName4="Bob";
        var userAge4=24;
        var userAddress4="9865 Lupine Ln";
        // client 5
        var userName5="Kim";
        var userAge5=51;
        var userAddress5="420N Wereworlf Way";
        // client 6
        var userName6="Lyn";
        var userAge6=48;
        var userAddress6="7 Vampire Vista";

        
        function enrollStatus(studentYes) {
            let result;
            if (studentYes=true){
                result='Enrolled';
            } else {
                result='NOT Enrolled';
            }
            return result;
        }
        function enrollStatus(studentNo) {
            let result;
            if (studentNo=true){
                result='Enrolled';
            } else {
                result='NOT Enrolled';
            }
            return result;
        }

        // console.log(userName);
        // console.log(userAge);
        // console.log(student);

        document.write(`
            <p><center><b><u> Client List </u></b></center></p>
            <p><b> Name: </b>${userName1}</p>
            <p><b> Age: </b>${userAge1}</p>
            <p><b> Address: </b>${userAddress1}</p>
            <p><b> Enrolled: </b>${studentYes}</p>
            <p>_______________________________</p>
            <p><b> Name: </b>${userName2}</p>
            <p><b> Age: </b>${userAge2}</p>
            <p><b> Address: </b>${userAddress2}</p>
            <p><b> Enrolled: </b>${studentYes}</p>
            <p>_______________________________</p>
            <p><b> Name: </b>${userName3}</p>
            <p><b> Age: </b>${userAge3}</p>
            <p><b> Address: </b>${userAddress3}</p>
            <p><b> Enrolled: </b>${studentNo}</p>
            <p>_______________________________</p>
            <p><b> Name: </b>${userName4}</p>
            <p><b> Age: </b>${userAge4}</p>
            <p><b> Address: </b>${userAddress4}</p>
            <p><b> Enrolled: </b>${studentYes}</p>
            <p>_______________________________</p>
            <p><b> Name: </b>${userName5}</p>
            <p><b> Age: </b>${userAge5}</p>
            <p><b> Address: </b>${userAddress5}</p>
            <p><b> Enrolled: </b>${studentNo}</p>
            <p>_______________________________</p>
            <p><b> Name: </b>${userName6}</p>
            <p><b> Age: </b>${userAge6}</p>
            <p><b> Address: </b>${userAddress6}</p>
            <p><b> Enrolled: </b>${studentNo}</p>
            <p>_______________________________</p>
        `);
        // userName="Matthew";
        // userAge="35";

        // document.write(`
        // <p><b> Name: </b>${userName}</p>
        // <p><b> Age: </b>${userAge}</p>
        // `);

        // let clientName="Yadiel";
        // let clientType="Premium";

        // // let clientName="Kenny";------>incorrect

        // document.write(`
        // <p><b> Name: </b>${clientName}</p>
        // <p><b> Type: </b>${clientType}</p>
        // `);

        // const taxes=.16;
        // // taxes=.11; --->incorrect
        // console.log(taxes);