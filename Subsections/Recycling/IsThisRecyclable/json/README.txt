I plan on making separate JSON entries for each object which we have on-file. Its attributes are as follows:

name: The key which the user searches for.
image: [IF POSSIBLE] An image of a generic version of the item.
commonlyMadeOf: the material often used, including numbers of plastic
recyclable?: Yes/No/Sometimes (w/ information)
moreInfo: Any additional info, if necessary.

Ideally, I'd like it to be as simple as

1) User submits text
2) JS file takes submitted text
3) JS file searches through JSON file for entry with name that matches text
4) JS retrieves matching JSON file (or prints error if no such entry exists)
5) JS updates page with the information it retrieved

There can also be an alternate 'checklist' option, where the user is shown every item we have on-file, and selects the option they're curious about. This can be useful since our searchbar can only find specific key phrases, and the user might have trouble finding "water bottle" if they're searching "aquafina bottle."