var xpath = function(xpathToExecute) {
  var result = [];
  var nodesSnapshot = document.evaluate(
    xpathToExecute,
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );
  for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
    result.push(nodesSnapshot.snapshotItem(i));
  }
  return result;
};

jobDesc = () => ({
  title: xpath("//div/div/header/h1")[0].textContent,
  company: xpath("//div[1]/div[1]/div/a/.")[0].textContent,
  minExperience: xpath("//section[1]/div[1]/div[2]/div/span/text()[1]")[0]
    .textContent,
  maxExperience: xpath("//section[1]/div[1]/div[2]/div/span/text()[3]")[0]
    .textContent,
  salary: xpath('//section[1]/div[1]/div[2]/div[@class="salary"]/span')[0]
    .textContent,
  location: xpath("//div/div/div/span/a/.")[0].textContent,
  openings: xpath(
    '//div[2]/section[1]/div[2]//label[contains(.,"Openings")]/following-sibling::span'
  )[0].textContent,
  jobDescription: xpath("//div[2]/section[2]/div[1]")[0].innerHTML,
  role: xpath(
    '//section[2]/div[2]/div[1]//label[contains(.,"Role")]/following-sibling::span/a/.'
  )[0].textContent,
  industryType: xpath(
    '//section[2]/div[2]/div[2]//label[contains(.,"Industry Type")]/following-sibling::span/a/.'
  )[0].textContent,
  funcArea: xpath(
    '//section[2]/div[2]/div[3]//label[contains(.,"Functional Area")]/following-sibling::span/a/.'
  ).map(x => x.textContent),
  employmentType: xpath(
    '//section[2]/div[2]/div[4]//label[contains(.,"Employment Type")]/following-sibling::span/span'
  )[0].textContent,
  roleCategory: xpath(
    '//section[2]/div[2]/div[5]//label[contains(.,"Role Category")]/following-sibling::span/span'
  )[0].textContent,
  ug: xpath('//div[3]/div/label[contains(.,"UG")]/following-sibling::span')[0]
    ? xpath('//div[3]/div/label[contains(.,"UG")]/following-sibling::span')[0]
        .textContent
    : "",
  pg: xpath('//div[3]/div/label[contains(.,"PG")]/following-sibling::span')[0]
    ? xpath('//div[3]/div/label[contains(.,"PG")]/following-sibling::span')[0]
        .textContent
    : "",
  doctorate: xpath(
    '//div[3]/div/label[contains(.,"Doctorate")]/following-sibling::span'
  )[0]
    ? xpath(
        '//div[3]/div/label[contains(.,"Doctorate")]/following-sibling::span'
      )[0].textContent
    : "",
  keySkills: xpath("//section[2]/div[4]/div[2]/a/.").map(x => x.textContent),
  aboutCompany: xpath('//div[2]/section[@class="about-company"]/div')[0]
    .textContent
});

function copyToClipboard(text) {
  var $temp = $("<textarea>");
  $("body").append($temp);
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();
}

jobDescData = jobDesc();
copyToClipboard(JSON.stringify(jobDescData))
alert("Data copied to clipboard!");
