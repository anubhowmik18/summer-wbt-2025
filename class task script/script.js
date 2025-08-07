function ContactMe() 
{
  var reason = prompt("Reason for Contact:\n1. Research\n2. Thesis\n3. Internship");
  if (!reason) return;
  reason = reason.toLowerCase();

  var output = "Reason for Contact: " + reason + "\n";

  if (reason == "research") 
  {
    var sector = prompt("Please specify the sector of your research");
    var area = prompt("What is your specific area of interest or topic within that sector");
    output += "Research Sector: " + sector + "\nResearch Area: " + area + "\n";
  } 
  else if (reason == "thesis") 
  {
    var topic = prompt("What is the main area or topic of your thesis?");
    var supervisor = prompt("Who is your thesis supervisor?");
    output += "Thesis Area: " + topic + "\nSupervisor: " + supervisor + "\n";
  } 
  else if (reason == "internship") 
  {
    var company = prompt("Which organization or company are you representing?");
    var duration = prompt("What is the duration of the proposed internship?");
    output += "Company: " + company + "\nDuration: " + duration + "\n";
  } 
  else 
  {
    alert(" Invalid reason provided. Please restart and select a valid option.");
    return;
  }

  var service = prompt("Services:\n1. Development\n2. Design\n3. Maintenance");
  if (!service) return;
  service = service.toLowerCase();

  var output2 = "Service: " + service + "\n";

  if (service == "development") 
  {
    var devType = prompt("Please describe the type of development service you require");
    output2 += "Development Type: " + devType + "\n";
  } 
  else if (service == "design") 
  {
    var designType = prompt("Please describe the type of design service you're looking for");
    output2 += "Design Type: " + designType + "\n";
  } 
  else if (service == "maintenance")
  {
    var system = prompt("Which system or platform do you need maintenance support for?");
    output2 += "System: " + system + "\n";
  } 
  else 
  {
    alert("Invalid service choice. Please restart and choose a valid option.");
    return;
  }

  alert("Collected Information:\n\n" + output + output2);
}