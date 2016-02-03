/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewSalesmanItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.SalesmanItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.SalesmanItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

