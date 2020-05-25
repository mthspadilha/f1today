

function today(){ //splits today's date
    var data = new Date();
    var dia  = data.getDate();
    var mes  = data.getMonth();
    var ano  = data.getFullYear();
    
    var todaydate = dia+'/'+mes+'/'+ano; //br format
    

    return todaydate;

    }
    
    var todayday = today();
    console.log(todayday);

    

    function daysSCPMFPFGP(){ //SCPMFPFGP Stands for 'Since Covid-19 Pandemic Makes FIA post-pone first grand prix of 2020'
        const startThisYear = new Date('2020-3-15'); //start of 2020 season
        const now = new Date(); // today's date 
        const diff = Math.abs(now.getTime() -startThisYear.getTime());
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24 ) - 1);
        
        
        return days;
    }


    function daysWithoutF1(){
        const now = new Date(); // today's date 
        const past = new Date('2019-12-1'); //last gp from 2019 seasson date
        const diff = Math.abs(now.getTime() - past.getTime());
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24 ) - 1);
       
        return days;
    };
    
        var diassemf1 = daysWithoutF1();
        var diassemf1esseano = daysSCPMFPFGP();

        console.log(diassemf1);
        console.log(diassemf1esseano);
