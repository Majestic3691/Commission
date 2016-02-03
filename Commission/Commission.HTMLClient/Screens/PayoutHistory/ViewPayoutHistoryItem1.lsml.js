/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewPayoutHistoryItem1.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.PayoutHistoryItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.PayoutHistoryItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

