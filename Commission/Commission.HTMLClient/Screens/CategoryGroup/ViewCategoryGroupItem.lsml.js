/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewCategoryGroupItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.CategoryGroupItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.CategoryGroupItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

