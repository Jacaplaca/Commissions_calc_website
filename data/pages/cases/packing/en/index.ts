const appName = process.env.NEXT_PUBLIC_APPNAME;
const membersHelp = `
We can use ${appName} for more than just rewarding sales. We can also use it to count productivity internally. Our client is a company that frequently ships large packages. There are several types of them, and packaging takes several minutes to several dozen minutes. Before using ${appName}, each employee put their sticker on the package, and the manager scanned the packages in the warehouse and added them to the system. On this basis, the manager counted once a month the productivity of each employee and calculated bonuses for several people.

${appName} allowed to automate this process even more. Parcels are still scanned, but this operation also adds them to ${appName}. The client asked us to integrate with their existing system. The amount of work for the manager when calculating bonuses has greatly decreased because he no longer has to export data from the system and individually count each bonus. The process was already very automated, so in the case of ${appName}, it did not show its strong advantage, but it became apparent when employees were allowed to view their performance. Some checked their performance daily, which led to a 7.4% increase in productivity in the packaging department. The company also reduced the time to count bonuses from monthly to once a week.

`;

export default membersHelp;
