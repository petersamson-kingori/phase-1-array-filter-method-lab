// Code your solution here

function findMatching(drivers, string) {
    string = string.toLowerCase();
    const matchingDrivers = drivers.filter((driver) => {
        const driverName = driver.toLowerCase();
        return driverName.includes(string);
      });
    
      return matchingDrivers;
    }

    function fuzzyMatch(drivers, string) {
        string = string.toLowerCase();
        const matchingDrivers = drivers.filter((driver) => {
          const driverName = driver.toLowerCase();
          return driverName.startsWith(string);
        });
      
        return matchingDrivers;
      }
      

      function matchName(drivers, string) {
        string = string.toLowerCase();
        const matchingDrivers = drivers.filter((driver) => {
          const driverName = driver.name.toLowerCase();
          return driverName.includes(string);
        });
      
        return matchingDrivers;
      }
      