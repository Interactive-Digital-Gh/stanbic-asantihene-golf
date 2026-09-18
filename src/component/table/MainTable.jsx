// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import golfcourse from "../../assets/table/golfcourse.png"
import { GiGolfFlag } from "react-icons/gi";
import { CMS_URL } from "../../lib/cms";

const MainTable = () => {

    const [formattedDate, setFormattedDate] = useState("");
    const [playersData, setPlayersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const holes = [1, 2, 3, 4];

    // FORMAT DATE ON LOAD
    useEffect(() => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, "0");
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const dayOfWeek = today
            .toLocaleDateString("en-US", { weekday: "short" })
            .toUpperCase();

        setFormattedDate(`${day}/${month} ${dayOfWeek}`);
    }, []);

    // FETCH DATA FROM API
    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch(
                    `${CMS_URL}/api/players-data`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();
                setPlayersData(data);
            } catch (err) {
                setError(err.message);
            }

            setLoading(false);
        };

        fetchPlayers();
    }, []);

    return (
        <div>
            <section
                className="relative w-full h-[964px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${golfcourse})` }}
            >
                <div className="absolute w-full max-w-[1056px] bg-white rounded-lg shadow-md">
                    <div className="p-4 md:p-8">

                        {/* Header */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 bg-white p-4 rounded-lg border">
                            <div className="flex items-center gap-2">
                                <GiGolfFlag className="w-6 h-6 text-[#0637A2]" />
                                <h1 className="text-[16px] font-bold text-[#0637A2]">SCOREBOARD</h1>

                                <span className="ml-0 md:ml-4 lg:text-sm text-[12px] md:text-lg font-normal text-[#6D6D6D]">
                                    Prize Money: GHS 70,000.00
                                </span>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#6D6D6D] font-semibold border border-gray-300 mt-4 md:mt-0">
                                <span>📅</span>
                                <span>{formattedDate}</span>
                            </div>
                        </div>

                        {/* Loading & Error States */}
                        {loading && (
                            <p className="text-center py-10 text-gray-500">Loading players...</p>
                        )}

                        {error && (
                            <p className="text-center py-10 text-red-500">
                                Error: {error}
                            </p>
                        )}

                        {!loading && !error && (
                            <div className="border border-border rounded-lg max-h-[480px] overflow-y-auto bg-card">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-border bg-[#0637A2]">
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-white w-12">
                                                POS
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-white w-40">
                                                NAME
                                            </th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold text-white w-12">
                                                PAR
                                            </th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold text-white w-12">
                                                THRU
                                            </th>
                                            <th className="px-4 py-3 text-center text-sm font-semibold text-white w-16">
                                                TODAY
                                            </th>

                                            {/* Hole Columns */}
                                            {holes.map((hole) => (
                                                <th
                                                    key={hole}
                                                    className="px-3 py-3 text-center text-sm font-semibold text-white w-10"
                                                >
                                                    {hole}
                                                </th>
                                            ))}

                                            <th className="px-4 py-3 text-center text-sm font-semibold text-white w-12">
                                                TOTAL
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {playersData.map((player, idx) => (
                                            <tr
                                                key={player.id}
                                                className="border-b border-border hover:bg-muted/50 transition-colors"
                                            >
                                                {/* POSITION */}
                                                <td className="px-4 py-3 text-sm font-medium text-[#6D6D6D]">
                                                    {idx + 1}
                                                </td>

                                                {/* NAME */}
                                                <td className="px-4 py-3 text-sm font-medium text-[#6D6D6D]">
                                                    {player.player_name}
                                                </td>

                                                {/* PAR */}
                                                <td className="px-4 py-3 text-sm text-center text-[#6D6D6D]">
                                                    {player.par || "—"}
                                                </td>

                                                {/* THRU */}
                                                <td className="px-4 py-3 text-sm text-center text-[#6D6D6D]">
                                                    {player.thru || "—"}
                                                </td>

                                                {/* TODAY */}
                                                <td
                                                    className={`px-4 py-3 text-sm text-center font-semibold ${player.today < 0
                                                        ? "text-red-600"
                                                        : player.today > 0
                                                            ? "text-blue-600"
                                                            : "text-[#6D6D6D]"
                                                        }`}
                                                >
                                                    {player.today > 0 ? "+" : ""}
                                                    {player.today || "—"}
                                                </td>

                                                {/* Hole Scores */}
                                                {[player.one, player.two, player.three, player.four].map(
                                                    (value, holeIdx) => (
                                                        <td
                                                            key={holeIdx}
                                                            className="px-3 py-3 text-sm text-center text-[#6D6D6D]"
                                                        >
                                                            {value || "—"}
                                                        </td>
                                                    )
                                                )}

                                                {/* TOTAL */}
                                                <td
                                                    className={`px-4 py-3 text-sm text-center font-semibold ${player.total < 0
                                                        ? "text-red-600"
                                                        : player.total > 0
                                                            ? "text-blue-600"
                                                            : "text-[#6D6D6D]"
                                                        }`}
                                                >
                                                    {player.total > 0 ? "+" : ""}
                                                    {player.total || "—"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainTable;
