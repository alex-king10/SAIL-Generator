export function removeWhiteSpaceExceptInQuotes(str) {
	let result = "";
	let inQuote = false;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '"' || str[i] === "'") {
			inQuote = !inQuote;
			result += str[i];
		} else if (!inQuote && /\s/.test(str[i])) {
			// ignore whitespace that is not inside a quote
			continue;
		} else {
			result += str[i];
		}
	}
	return result;
}

export function removeNewlinesAndExtraSpaces(str) {
	// Replace all newline characters with a space
	const stringWithoutNewlines = str.replace(/\n/g, ' ');

	// Replace all consecutive spaces that are two or more in a row with a single space
	const stringWithoutExtraSpaces = stringWithoutNewlines.replace(/ {2,}/g, ' ');

	return stringWithoutExtraSpaces;
}


const listOfFunctionFromScrape = `a!flatten() a!update() append() index() insert() joinarray() ldrop() length() rdrop() remove() reverse() updatearray() where() wherecontains() bin2dec() bin2hex() bin2oct() dec2bin() dec2hex() dec2oct() hex2bin() hex2dec() hex2oct() oct2bin() oct2dec() oct2hex() a!cmiCopyDocumentFromAppian() a!cmiCopyDocumentToAppian() a!cmiCopyDocumentToAppianFolder() a!cmiCreateFolder() a!cmiDelete() a!cmiGetFolderChildren() a!cmiGetObjectIdByPath() a!cmiGetProperties() a!cmiGetRepoInfo() a!httpAuthenticationBasic() a!httpFormPart() a!httpHeader() a!httpQueryParameter() a!scsField() a!verifyRecaptcha() a!sapBapiParameters() a!sapInvoke() a!sblCreate() a!sblDelete() a!sblInvoke() a!sblInvokeWriter() a!sblQuery() a!sblUpdateFieldValue() a!wsConfig() a!wsHttpCredentials() a!wsHttpHeaderField() a!wsUsernameToken() a!wsUsernameTokenScs() displayvalue() externalize() internalize() toboolean() tocommunity() todate() todatetime() todecimal() todocument() toemailaddress() toemailrecipient() tofolder() tointeger() tointervalds() toknowledgecenter() tostring() totime() touniformstring() a!customFieldConcat() a!customFieldCondition() a!customFieldMatch() a!customFieldDateDiff() a!customFieldDefaultValue() a!customFieldDivide() a!customFieldLogicalExpression() a!customFieldMatch() a!customFieldMatch() a!customFieldMultiply() a!customFieldSubtract() a!customFieldSum() a!addDateTime() calisworkday() calisworktime() calworkdays() calworkhours() date() datetime() datevalue() day() dayofyear() days360() daysinmonth() edate() eomonth() gmt() hour() intervalds() isleapyear() lastndays() local() milli() minute() month() networkdays() now()() second() a!subtractDateTime() time() timevalue() timezone()() timezoneid()() today()() weekday() weeknum() workday() year() yearfrac() a!docExtractionResult() a!docExtractionStatus() a!localVariables() a!refreshVariable() bind() load() a!save() with() a!defaultValue() a!keys() a!listType() cast() error() infinity()() isinfinite() isnegativeinfinity() isnull() ispositiveinfinity() nan()() null() runtimetypeof() typename() typeof() and() choose() false() if() a!match() not() or() true() a!forEach() all() any() apply() filter() merge() none() reduce() reject() abs() ceiling() combin() e()() enumerate() exp() floor() int() ln() log() mod() mround() multinomial() odd() pi()() power() product() quotient() rand() round() rounddown() roundup() sign() sqrt() sqrtpi() sumsq() trunc() a!doesGroupExist() a!groupMembers() a!groupsByName() a!groupsByType() a!groupsForUser() a!isUserMemberOfGroup() getdistinctusers() getgroupattribute() group() isusermemberofgroup_21r2() isusernametaken() loggedInUser()() supervisor() togroup() topeople() touser() user() a!aggregationFields() a!isNativeMobile()() a!isPageWidth() a!urlForTask() averagetaskcompletiontimeforprocessmodel() averagetasklagtimeforprocessmodel() averagetaskworktimeforprocessmodel() community() datetext() document() folder() isInDaylightSavingTime() knowledgecenter() numontimeprocessesforprocessmodel() numontimetasksforprocessmodel() numoverdueprocessesforprocessmodel() numoverduetasksforprocessmodel() numprocessesforprocessmodelforstatus() numtasksforprocessmodelforstatus() offsetFromGMT() property() repeat() todatasubset() topaginginfo() torecord() toxml() urlforrecord() urlwithparameters() userdate() userdatetime() userdatevalue() userday() userdayofyear() userdaysinmonth() useredate() usereomonth() userisleapyear() userlocale() usermonth() usertimezone() userweekday() userweeknum() useryear() webservicequery() webservicewrite() xpathdocument() xpathsnippet() contains() difference() intersection() symmetricdifference() union() avedev() average() count() frequency() gcd() geomean() harmean() lcm() lookup() max() median() min() mode() rank() stdev() stdevp() var() varp() a!applyComponents() a!dataSubset() a!deployment() a!entityData() a!entityDataIdentifiers() a!executeStoredProcedureForQuery() a!fromJson() a!fromJson_19r2() a!getDataSourceForPlugin() a!httpResponse() a!httpResponse_17r4() a!iconIndicator() a!documentImage() a!iconNewsEvent() a!integrationError() a!jsonPath() a!latestHealthCheck()() a!listViewItem() a!pagingInfo() a!query() a!queryAggregation() a!queryAggregationColumn() a!queryColumn() a!queryEntity() a!queryEntity_18r3() a!queryEntity_22r2() a!queryFilter() a!pickerFieldRecords() a!queryRecordType() a!recordData() a!recordFilterListOption() a!query() a!queryLogicalExpression() a!queryProcessAnalytics() a!querySelection() a!recordFilterChoices() a!recordFilterDateRange() a!recordFilterDateRange_20r2() a!recordFilterList() a!recordFilterListOption() a!sentimentScore() a!sortInfo() a!storedProcedureInput() a!submitUploadedFiles() a!fileUploadField() a!signatureField() a!toJson() a!toJson_17r1() a!toRecordIdentifier() a!userRecordFilterList()() a!userRecordFilterList_22r3()() a!userRecordIdentifier() a!userRecordListViewItem() a!userRecordListViewItem_22r3() a!map() a!queryRecordType() a!queryRecordType_20r4() a!recordData() a!testRunResultForId() a!testRunStatusForId() cents() char() charat() clean() cleanwith() code() concat() a!currency() currency_22r4() exact() extract() extractanswers() find() fixed() a!formatPhoneNumber() initials() insertkey() insertkeyval() insertquestions() a!isPhoneNumber() keyval() left() leftb() len() lenb() like() lower() mid() midb() padleft() padright() proper() replace() replaceb() rept() resource() right() search() searchb() soundex() split() strip() stripHtml() stripwith() substitute() a!swissFranc() text() toHtml() trim() upper() value() acos() acosh() asin() asinh() atan() atanh() cos() cosh() degrees() radians() sin() sinh() tan() tanh() a!areaChartField() a!columnChartField() a!areaChartConfig() a!barChartField() a!barChartField_21r4() a!barChartConfig() a!barcodeField() a!billboardLayout() a!boxLayout() a!richTextBulletedList() a!buttonArrayLayout() a!buttonWidget() a!buttonLayout() a!colorSchemeCustom() a!chartReferenceLine() a!chartSeries() a!checkboxFieldByIndex() a!checkboxField() a!columnChartField() a!columnChartConfig() a!columnLayout() a!hierarchyBrowserFieldColumns() a!hierarchyBrowserFieldColumnsNode() a!columnsLayout() a!pickerFieldCustom() a!dateField() a!dateTimeField() a!documentBrowserFieldColumns() a!documentImage() a!documentDownloadLink() a!pickerFieldDocuments() a!documentViewerField() a!documentAndFolderBrowserFieldColumns() a!pickerFieldDocumentsAndFolders() a!dropdownFieldByIndex() a!dropdownField() a!dynamicLink() a!gridLayout() a!encryptedTextField() a!fileUploadField() a!floatingPointField() a!folderBrowserFieldColumns() a!pickerFieldFolders() a!formLayout() a!gaugeField() a!gaugeFraction() a!gaugeIcon() a!gaugePercentage() a!gridColumn() a!gridLayoutColumnConfig() a!gridLayoutHeaderCell() a!gridRowLayout() a!groupBrowserFieldColumns() a!pickerFieldGroups() a!headerContentLayout() a!richTextHeader() a!imageField() a!richTextImage() a!integerField() a!lineChartField() a!lineChartConfig() a!linkField() a!richTextListItem() a!milestoneField() a!multipleDropdownFieldByIndex() a!multipleDropdownField() a!newsEntryLink() a!richTextNumberedList() a!orgChartField() a!gridField() a!paragraphField() a!pieChartField() a!pieChartConfig() a!processTaskLink() a!progressBarField() a!radioButtonFieldByIndex() a!radioButtonField() a!recordActionField() a!recordActionItem() a!recordLink() a!pickerFieldRecords() a!pickerFieldRecords_22r1() a!reportLink() a!richTextDisplayField() a!scatterChartField() a!sectionLayout() a!sideBySideItem() a!sideBySideLayout() a!signatureField() a!stampField() a!startProcessLink() a!richTextIcon() a!richTextItem() a!submitLink() a!tagField() a!tagItem() a!textField() a!timeDisplayField() a!hierarchyBrowserFieldTree() a!hierarchyBrowserFieldTreeNode() a!userBrowserFieldColumns() a!userImage() a!pickerFieldUsers() a!userRecordLink() a!userAndGroupBrowserFieldColumns() a!pickerFieldUsersAndGroups() a!videoField() a!webContentField() a!webImage() a!safeLink() a!webVideo() a!authorizationLink() a!barOverlay() a!cardTemplateBarTextStacked() a!cardChoiceField() a!cardTemplateBarTextJustified() a!cardChoiceField() a!cardChoiceField() a!cardTemplateTile() a!cardChoiceField() a!cardLayout() a!columnOverlay() a!fullOverlay()`

export function createInitialPrompt(prompt) {
	return `You are an Appian SAIL interface generator. You are only allowed to use functions from this list of SAIL functions: ${listOfFunctionFromScrape}. Follow the following rules.

	RULES:
	- Only use functions from the 'list of SAIL functions' above
	- Return the data in the following JSON format: {"functions": ["function1", "function2", ...]}
	- Return nothing other than this JSON statement
	- Return proper JSON, do not describe what you are doing
	- Return the full name of all functions. For example, return a!buttonWidget(), not buttonWidget. Return a!dateField(), not dateField. Return and() not and.
	
	List the functions (from the above list) you will need to generate an interface based on the following prompt? 
	
	Prompt: ${prompt}`
}


export function createSecondPrompt(prompt, functions) {

	return `You are an Appian SAIL interface generator. Based on the following functions and their parameters, generate a SAIL interface based on the prompt

	RULES:
	- Do not make up any new functions. 
	- Do not use parameters outside of those listed in the functions context below.
	- Try to use as many parameters as possible
	- Send back only SAIL code.
	- Start all of your SAIL responses with a!localVariables
	- Only use parameters that are in each function's description, do not make up your own. For example, a!formLayout has the parameters label, instructions, contents, buttons, validations, validationGroup, skipAutoFocus, showWhen shown in a!formLayout(label, instructions, contents, buttons, validations, validationGroup, skipAutoFocus, showWhen). Do not give a!formLayout a 'placeholder' because it is not in the list of it's parameters.
	- Only use local variables that are declared at the top of the interface and set them with a default value related to their use. Declare all local variables at the top of the interface with:
		a!localVariables(
			local!textVar: "",
			local!integerVar: 0,
				<INSERT OTHER SAIL FUNCTIONS HERE>
			)

	ERRORS TO AVOID:
	- An array of components cannot contain a form layout, dashboard layout, or column layout. For example, a!localVariables(local!example, formLayout(<INSERT OTHER SAIL FUNCTIONS HERE>)) is correct and  a!localVariables(local!example, { formLayout(<INSERT OTHER SAIL FUNCTIONS HERE>) }) is not correct
	- Always set the placeholder parameter of a!dropdownField components
	- Always have matching brackets and parenthesis
	- Logical operators like or(), when(), and and() must wrap around the condition. For example and(local!val, local!val2) or or(local!val, local!val2) or when({true, false, true})
	- Always wrap the value of the parameter contents in brackets. For example: a!formLayout(label: "Home Loan Form", contents: {a!textField(), a!textField} )
	- The contents field on a column layout or a formLayout cannot contain a ButtonWidget.
	- Do not make up functions. If you feel like you need to use a function that does not exist, simply comment it out. For example, isemail() is not a SAIL function, so if you want to use it, comment it out like this: /* validations: isemail("email") */
	- The contents field on a column layout cannot contain a ButtonWidget. 
	- A header content layout has an invalid value for "header". Header must be null, a billboard, a card, or a list of billboards or cards.
	
	FUNCTIONS: ${functions}

	PROMPT: ${prompt}
	`
}


const old =
	`
- Send back the code in one line (removing all new line characters)
`


export const filteredOutFunctions = new Set('a!dynRetrieveMultiple', 'a!shpCopyDocumentToAppian', 'bin2oct', 'a!dynAssociate', 'isNativePhone', 'dec2oct', 'linktouser', 'page', 'linktogroupinternal', 'linktocommunity', 'oct2bin', 'False', 'isusermemberofgroup_21r2', 'a!sapInvokeWriter', 'oct2dec', 'tomessage', 'linktodocumentinternal', 'dec2bin', 'a!userRecordFacets', 'bin2dec', 'a!facet', 'a!sfcUpdate', 'a!queryRecordType_20r4', 'a!sfcDelete', 'a!queryEntity_22r2', 'toforum', 'a!queryEntity_18r3', 'linktoprocessmodeldashboardinternal', 'a!httpResponse_17r4', 'byReference', 'linktoprocessdashboardinternal', 'a!sfcDescribeGlobal', 'linktoknowledgecenter', 'a!fromJson_19r2', 'fromHtml', 'a!dynDelete', 'a!dynUpdate', 'a!userRecordListViewItem_22r3', 'toportlet', 'linktouserinternal', 'a!shpInvoke', 'a!toJson_17r1', 'linktofolderinternal', 'a!userRecordFilterList_22r3', 'linktoprocessmodeldashboard', 'a!dynCreate', 'isNativeTablet', 'linktocommunityinternal', 'bin2hex', 'hex2oct', 'a!sfcDescribeSObjects', 'oct2hex', 'dec2hex', 'queryrecord', 'days360', 'null', 'a!recordFilterDateRange_20r2', 'a!httpWrite', 'getprocessmodelemail', 'a!sfcQuery', 'linktogroup', 'a!shpCopyDocumentFromAppian', 'a!httpQuery', 'none', 'a!dynRetrieve', 'linktofolder', 'a!facetOption', 'a!sfcSearch', 'todiscussionthread', 'getprocessemail', 'linktoprocessdashboard', 'a!shpInvokeWriter', 'linktoknowledgecenterinternal', 'hex2bin', 'topage', 'hex2dec', 'a!sfcInsert', 'linktodocument', 'a!dynDisassociate', 'a!imageField_17r3', 'a!gridImageColumn', 'a!dashboardLayout', 'a!buttonWidgetSumbit', 'a!fileUploadField_17r1', 'a!dropdownField_20r2', 'a!multipleDropdownFieldByIndex_20r2', 'a!formLayout_17r1', 'a!dashboardLayout_17r1', 'a!barChartField_21r4', 'a!gridImageColumn_17r3', 'a!gridTextColumn', 'a!multipledropdownField_20r2', 'a!lineChartField_19r1', 'a!documentBrowserFieldColumns_17r3', 'a!billboardLayout_19r1', 'a!richTextItem_18r1', 'a!pickerFieldRecords_22r1', 'a!gridField_19r1', 'a!dropdownFieldByIndex_20r2', 'a!sectionLayout_17r1', 'a!pickerFieldRecords_20r2', 'a!gridSelection')