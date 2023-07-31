/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
 // Function to create employee records
function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
  } 
// Function to create a time in event for an employee
function createTimeInEvent(dateStamp) {
    const [date, time] = dateStamp.split(' ');
  
    this.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(time, 10),
      date: date,
    });
  
    return this;
  }
 // Function to create a time out event for an employee
function createTimeOutEvent(dateStamp) {
    const [date, time] = dateStamp.split(' ');
  
    this.timeOutEvents.push({
      type: 'TimeOut',
      hour: parseInt(time, 10),
      date: date,
    });
  
    return this;
  } 
 // Function to calculate hours worked on a specific date for an employee
function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
  }
// Function to calculate wages earned on a specific date for an employee
function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  }
// Function to find an employee by their first name
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }
  
  // Function to calculate total payroll for all employees
  function calculatePayroll(employees) {
    return employees.reduce((totalPay, employee) => totalPay + allWagesFor.call(employee), 0);
  }     
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

