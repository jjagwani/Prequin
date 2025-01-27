import React, { useEffect, useState } from "react";
import { Chip, Box, Typography, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { getAssetClasses } from "../../APIs";
import { useDispatch } from "react-redux";
import { selectFilter, resetFilter } from "Investors/FilterActions";
import { useStyles } from "./styles";
import { FilterProps, Asset } from "../../Types";
import { formatNumber } from "Investors/Helpers";
import { Loader } from "Investors/Loader";

const Filters: React.FC<FilterProps> = ({ totalCommitment }) => {
    const ALL_ASSETS: string = "All";
    const { id } = useParams();

    const [selectedFilter, setSelectedFilter] = useState<string>(ALL_ASSETS);
    const [assets, setAssets] = useState<Asset[]>([]);
    const [isDataAvailable, setIsDataAvailable] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const dispatch = useDispatch();

    const classes = useStyles();

    useEffect(() => {
        const fetchData: () => void = async () => {
            let assetsData: Asset[] | undefined = [];
            try {
                assetsData = await getAssetClasses(Number(id));
                if (assetsData && assetsData.length !== 0) {
                    setAssets([{ assetType: ALL_ASSETS, totalAmount: totalCommitment }, ...assetsData]);
                    setIsDataAvailable(true);
                }
            }
            catch (err) {
                setError(err);
            }

        }

        id && fetchData()
    }, []);

    const handleSelect: (assetType: string) => void = (assetType) => {
        assetType !== selectedFilter && setSelectedFilter(assetType);
        assetType == ALL_ASSETS ? dispatch(resetFilter()) : dispatch(selectFilter(assetType));

    };

    return (
        <>
            {error ? <Loader text={error} /> :
                <Box display="flex" gap={2} className={classes.box}>
                    {isDataAvailable ? assets.map((filter) => (
                        <Chip
                            key={filter.assetType}
                            label={
                                <Box className={classes.chipBox}>
                                    <Typography variant="body1" fontWeight={600}>
                                        {filter.assetType}
                                    </Typography>
                                    <Typography variant="body2">
                                        {formatNumber(filter.totalAmount)}
                                    </Typography>
                                </Box>
                            }
                            clickable
                            color={selectedFilter === filter.assetType ? "primary" : "default"}
                            onClick={() => handleSelect(filter.assetType)}
                            sx={{
                                paddingY: 1,
                                paddingX: 1.5,
                                minWidth: 120,
                                height: 60,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        />
                    )) : <CircularProgress />}
                </Box>}
        </>
    );
};

export default Filters;