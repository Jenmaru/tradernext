<ul className="flex">{stats.data !== undefined ? Object.keys(stats.data.main).sort().map((el, i) => {
                    const getStartNum = stats.data.main[el];
                    const prevKey = i - 1 >= 0 ? stats.data.main[Object.keys(stats.data.main).sort()[i - 1]][1] : 0;
                    const prevClose = prevKey !== 0 ? stats.data.main[prevKey][6] : 0;
                    const open = getStartNum[3];
                    const close = getStartNum[6];
                    const height = (open - close)/close * 100;
                    const nextHeight = prevClose !== 0 ? (prevClose - open)/prevClose * 100 : 0;
                    const str = Math.abs(height) + 1;
                    console.log(nextHeight);

                    return <li><div class="ms-0.5 dark:bg-gray-700 rotate-180" style={{ height: 200 + nextHeight }}>
                            <div class={`bg-${open < close ? "green" : "red"}-600`} style={{ height: str, width: 10 }}></div>
                            </div></li>}) : null}</ul>