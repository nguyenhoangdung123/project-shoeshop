import {getLeaderboardInfo} from "./proxies.js";
import {renderLeaderboard} from "./view.js";
const processLeaderboard = () => {
    const getLeaderboardInfo = await getLeaderboardInfo();
    renderLeaderboard(leaderboardInfo);
}