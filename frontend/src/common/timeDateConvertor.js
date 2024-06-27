export function convertToIndianFormat(timestamp) {
    // Parse the ISO 8601 timestamp
    const date = new Date(timestamp);

    // Define the Indian timezone offset (IST is UTC+05:30)
    const indianOffset = 5.5 * 60; // in minutes

    // Calculate the local time in IST
    const localTime = new Date(date.getTime() + indianOffset * 60 * 1000);

    // Extract the components
    const day = String(localTime.getUTCDate()).padStart(2, '0');
    const month = String(localTime.getUTCMonth() + 1).padStart(2, '0');
    const year = localTime.getUTCFullYear();

    let hours = localTime.getUTCHours();
    const minutes = String(localTime.getUTCMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = String(hours).padStart(2, '0');

    // Format the time as hh:mm a.m./p.m.
    const formattedTime = `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
    
    return formattedTime;
}