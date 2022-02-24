/*
 * @lc app=leetcode id=929 lang=typescript
 *
 * [929] Unique Email Addresses
 */

// @lc code=start
/**
 * `Set(table)`
 *
 * Split the string into two at "@".
 * And remove "." and any characters beyond "+".
 * After going through all items, merge divided string and add it to table.
 *
 * time: O(n)
 * space: O(n)
 */
function numUniqueEmails(emails: string[]): number {
  const table = new Set();

  for (const email of emails) {
    // split the email in first half and second half
    const emailArr = email.split("@");
    emailArr[0] = emailArr[0].split("+")[0];
    emailArr[0] = emailArr[0].replace(/\./g, "");

    // split the email in first half and second half
    table.add(emailArr.join("@"));
  }

  return table.size;
}
// @lc code=end
