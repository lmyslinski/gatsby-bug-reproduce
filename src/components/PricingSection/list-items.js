import { makeStyles, ListItem, ListItemIcon, ListItemText, Typography, List } from "@material-ui/core";
import React from "react"
import listItemChecked from "../../images/icons/list-item-checked.svg"
import listItemEmpty from "../../images/icons/list-item-empty.svg"

const useStyles = makeStyles((theme) => ({
    noMargin: {
        margin: 0
    }
}));

const PricingListItem = (text) => {
    let classes = useStyles()

    return (
        <ListItem>
            <ListItemIcon>
                <img alt="checked" src={listItemChecked}></img>
            </ListItemIcon>
            <ListItemText className={classes.noMargin}>
                <Typography component="li" variant="subtitle2">
                    {text}
                </Typography>
            </ListItemText>
        </ListItem>
    )
}

const PricingListItemMissing = (text) => {
    let classes = useStyles()

    return (
        <ListItem>
            <ListItemIcon>
                <img alt="checked" src={listItemEmpty}></img>
            </ListItemIcon>
            <ListItemText className={classes.noMargin}>
                <Typography component="li" variant="subtitle2" color="textSecondary">
                    {text}
                </Typography>
            </ListItemText>
        </ListItem>
    )
}


export const BasicPricingList = () => {
    return (
        <List dense>
            {PricingListItem("Basic influencer search")}
            {PricingListItem("Bookmarks")}
            {PricingListItem("Engagement rate")}
            {PricingListItem("Profile analytics")}
            {PricingListItem("Category filtering")}
            {PricingListItem("Follower filtering")}
            {PricingListItemMissing("Location filtering")}
            {PricingListItemMissing("Language filtering")}
            {PricingListItemMissing("Basic support")}
            {PricingListItemMissing("Report generation & export")}
            {PricingListItemMissing("Follower verification")}
            {PricingListItemMissing("Multiple users")}
            {PricingListItemMissing("24/7 support")}
        </List>
    )
}


export const BusinessPricingList = () => {
    return (
        <List dense >
            {PricingListItem("Basic influencer search")}
            {PricingListItem("Engagement rate")}
            {PricingListItem("Bookmarks")}
            {PricingListItem("Profile analytics")}
            {PricingListItem("Category filtering")}
            {PricingListItem("Follower filtering")}
            {PricingListItem("Location filtering")}
            {PricingListItem("Language filtering")}
            {PricingListItem("Basic support")}
            {PricingListItem("Report generation & export")}
            {PricingListItemMissing("Follower verification")}
            {PricingListItemMissing("Multiple users")}
            {PricingListItemMissing("24/7 support")}
        </List>
    )
}



export const EnterprisePricingList = () => {
    return (
        <List dense>
            {PricingListItem("Basic influencer search")}
            {PricingListItem("Engagement rate")}
            {PricingListItem("Bookmarks")}
            {PricingListItem("Profile analytics")}
            {PricingListItem("Category filtering")}
            {PricingListItem("Follower filtering")}
            {PricingListItem("Location filtering")}
            {PricingListItem("Language filtering")}
            {PricingListItem("Basic support")}
            {PricingListItem("Report generation & export")}
            {PricingListItem("Follower verification")}
            {PricingListItem("Multiple users")}
            {PricingListItem("24/7 support")}
        </List>

    )
}