import React from 'react';

class Request extends React.Component
{
    render()
    {
        return(
            <div>
                <div className="sf-step sf-step-0 sf-step-active" style={{"width": "1210px","float": "left","marginRight":"10px"}}>
                    <fieldset style={{"height": "460px"}}>
                    <legend className="legend-title">Request</legend>
                    <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="form-group">
                            <label>Request Title</label>
                            <span style={{"color": "red"}}>*</span>
                            <input type="text" className="form-control clsMandatory" id="idProjectName"/>
                            <span id="idProjectNameChar" className="clsInputBoxMsg">Max 100 Characters</span>
                            <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please enter the Project Name.</span>
                        </div>
                        <div className="form-group">
                            <label>Request Description</label>
                            <span className="" style={{"color": "red"}}>*</span>
                            <textarea className="form-control clsMandatory" placeholer="Message" id="idReqDescription"></textarea>
                            <span id="idReqDescriptionChar" className="clsInputBoxMsg"></span>
                            <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please enter Request Description.</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label>Requester</label>
                            <span className="" style={{"color": "red"}}>*</span>
                            <div id="idRequester" className="clsPeopleType clsMandatory" multiselect="false"><div dir="">
                            <input id="idRequester_TopSpan_HiddenInput" name="idRequester_TopSpan_HiddenInput" type="hidden" value="[{&quot;Key&quot;:&quot;i:0#.f|membership|mahendra.gohel@unilever.com&quot;,&quot;DisplayText&quot;:&quot;Gohel, Mahendra&quot;,&quot;IsResolved&quot;:true,&quot;Description&quot;:&quot;Mahendra.Gohel@unilever.com&quot;,&quot;EntityType&quot;:&quot;User&quot;,&quot;EntityData&quot;:{&quot;IsAltSecIdPresent&quot;:&quot;False&quot;,&quot;Title&quot;:&quot;&quot;,&quot;Email&quot;:&quot;Mahendra.Gohel@unilever.com&quot;,&quot;MobilePhone&quot;:&quot;&quot;,&quot;ObjectId&quot;:&quot;f9a4c62e-1072-44fb-ab32-a41e6c584ca3&quot;,&quot;Department&quot;:&quot;&quot;},&quot;MultipleMatches&quot;:[],&quot;ProviderName&quot;:&quot;Tenant&quot;,&quot;ProviderDisplayName&quot;:&quot;Tenant&quot;,&quot;Resolved&quot;:true}]"><div id="idRequester_TopSpan_AutoFillDiv" aria-live="assertive" className="sp-peoplepicker-autoFillContainer">
                            <input type="text" className="sp-peoplepicker-editorInput" size="1" autocomplete="off" value="" aria-required="true" id="idRequester_TopSpan_EditorInput" title="Enter a name or email address..." autocorrect="off" autocapitalize="off" data-sp-peoplepickereditor="true" aria-label="Gohel, Mahendra"/>
                            </div>
                            </div>
                            </div>
                            <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please enter Requester.</span>
                            <span id="idReqError" className="clsError" style={{"display": "none","color": "red"}}>Please enter only one Requester.</span>
                        </div>
                        <div className="form-group">
                            <label>Requester's Email ID</label>
                            <input type="text" className="form-control" id="idReqEmailDetails" readonly="">
                        </div>
                        <div className="form-group">
                            <label>Requester's Phone Number</label>
                            <input type="text" className="form-control" id="idReqContactDetails"/>
                            <span id="idReqChar" className="clsInputBoxMsg">Only 10 digits allowed</span>
                        </div>
                        <div className="form-group">
                            <label>Region(where SR is for)</label>
                            <span className="" style={{"color": "red"}}>*</span>
                            <div className="customSelect">
                                <select id="idRegion" className="clsMandatory">
                                <option value="-1">-Select-</option>
                                <option value="1">All</option><option value="2">Global Requests</option><option value="3">ASIA-AMET</option><option value="4">EUROPE</option><option value="5">LATAM</option><option value="6">NORTH AMERICA</option></select>
                            </div>
                            <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please select Region.</span>
                        </div>
                        <div className="form-group">
                            <label>MCO(where SR is for)</label>
                            <span className="" style={{"color": "red"}}>*</span>
                            <div className="customSelect">
                                <select id="idMco" className="clsMandatory">
                                <option value="-1">-Select-</option>
                                </select>
                            </div>
                            <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please select MCO.</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <label>Vendor Name</label>
                            <span className="" style={{"color": "red"}}>*</span>
                            
                            <div className="customSelect">
                                <select id="idVendorName" className="clsMandatory">
                                <option value="-1">-Select-</option>
                                <option value="1">British Telecom (BT)</option><option value="2">Other</option></select>
                            </div>
                            <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please select Vendor Name.</span>
                        </div>
                        <!--<div className="form-group">
                            <label >Business Function</label>
                            <span className="" style={{"color": "red"}}>*</span>
                            
                            <div className="customSelect">
                                <select id="idBussinessFunction" className="clsMandatory">
                                <option value="-1">-Select-</option>
                                </select>
                            </div>
                            <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please select Business Function.</span>
                        </div>-->
                        <div className="form-group">
                            <label>Business Required by date<span className="" style={{"color": "red"}}>*</span></label>
                            <div className="input-group date" id="datetimepicker">
                                <input type="text" className="form-control" id="idBusinessReqDT">
                                <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please select Business Required by date.</span>
                                <span className="add-on" data-toggle="tooltip" title="" data-original-title="Please select the latest realistic date when your SR must be delivered by."><i className="fa fa-calendar icon-calendar"></i></span>
                            </div>
                            
                            <span id="idBRDError" style={{"display": "none","color": "red"}}>A historical date is not allowed.  Please select a new date.</span>
                        </div>
                        <div className="form-group" id="idParentChildBlock">
                            <label style={{"marginTop": "20px"}}>Is this a Child SR?</label>							
                            <br>
                            <input className="" type="checkbox" id="idParentChild" name="idParentChild" value="" style={{"display": "inline"}}>
                            <label for="idParentChild"style={{"display": "inline","marginTop":"17px"}}> Yes</label>
                        </div>
                        <div className="form-group" id="idParentSRBlock" style={{"display": "none"}}>
                            <label>Parent SR ID</label>
                            <input className="form-control" type="text" id="idParentSR">
                        </div>
                        <div className="form-group" style={{"display": "none"}}>
                            <label>Vendor Project Manager</label>
                            <input type="text" className="form-control" id="idVendorProjectManager">
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <div className="form-group ">
                            <label className="reuester-req">How is the request being funded?<span className="" style={{"color": "red"}}>*</span></label>
                            <div className="customSelect">
                                <select id="idRequestFunded" className="clsMandatory">
                                <option value="-1">-Select-</option>
                                <option value="1">Project - ITIB funded</option><option value="2">Network Operational</option><option value="3">Geography - IT</option></select>
                            </div>
                            <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please select one option.</span>
                        </div>
                        <div className="form-group" id="ClarityId" style={{"display": "none"}}>
                            <label>Clarity ID<span className="" style={{"color": "red"}}>*</span></label>
                            <input type="text" className="form-control" id="idClarityId">
                            <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please enter Clarity ID.</span>
                        </div>
                        <div className="form-group" id="SAProjectManagerId" style={{"display": "none"}}>
                            <label>Technical Project Manager<span className="" style={{"color": "red"}}>*</span></label>
                            <div id="idSaPm"><div dir=""><div className="sp-peoplepicker-topLevel" id="idSaPm_TopSpan" title="Enter a name or email address..." spclientpeoplepicker="true"><input id="idSaPm_TopSpan_HiddenInput" name="idSaPm_TopSpan_HiddenInput" type="hidden"><div id="idSaPm_TopSpan_AutoFillDiv" aria-live="assertive" className="sp-peoplepicker-autoFillContainer"></div><span id="idSaPm_TopSpan_InitialHelpText" className="sp-peoplepicker-initialHelpText ms-helperText">Type to enter a Name</span><img className="sp-peoplepicker-waitImg" id="idSaPm_TopSpan_WaitImage" alt="This animation indicates the operation is in progress. Click to remove this animated image." src="/_layouts/15/images/gears_anv4.gif?rev=44"><span id="idSaPm_TopSpan_ResolvedList" className="sp-peoplepicker-resolveList"></span><span id="idSaPm_TopSpan_NotificationSpan" aria-live="polite" style={{"visibility":"hidden","position":"absolute","width":"0px","display":"inlineblock"}}></span><input type="text" className="sp-peoplepicker-editorInput" size="1" autocomplete="off" value="" aria-required="true" id="idSaPm_TopSpan_EditorInput" title="Enter a name or email address..." autocorrect="off" autocapitalize="off" data-sp-peoplepickereditor="true"></div></div></div>
                            <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please enter Technical Project Manager.</span>
                        </div>
                        <div className="form-group" id="SAPMDetailsId" style={{"display": "none"}}>
                            <label>Email Address<span className="" style={{"color": "red"}}>*</span></label>
                            <input type="text" className="form-control" id="idSAPMDetails">
                            <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please enter Email Address.</span>
                        </div>
                        <div className="form-group" id="CostCenterId" style={{"display": "none"}}>
                            <label>Cost Center<span className="" style={{"color": "red"}}>*</span></label>
                            <input type="text" className="form-control" id="idCostCenter">
                            <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please enter Cost Center.</span>
                        </div>
                        <div className="form-group" id="LegalEntityId" style={{"display": "none"}}>
                            <label>Legal Entity<span className="" style={{"color": "red"}}>*</span></label>
                            <input type="text" className="form-control" id="idLegalEntity">
                            <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please enter Legal Entity.</span>
                        </div>
                        <div className="form-group" id="ServiceLineApproverId" style={{"display": "none"}}>
                            <label>Name of Service Line Approver<span className="" style={{"color": "red"}}>*</span></label>
                            <div id="idServiceLineApprover"><div dir=""><div className="sp-peoplepicker-topLevel" id="idServiceLineApprover_TopSpan" title="Enter a name or email address..." spclientpeoplepicker="true"><input id="idServiceLineApprover_TopSpan_HiddenInput" name="idServiceLineApprover_TopSpan_HiddenInput" type="hidden"><div id="idServiceLineApprover_TopSpan_AutoFillDiv" aria-live="assertive" className="sp-peoplepicker-autoFillContainer"></div><span id="idServiceLineApprover_TopSpan_InitialHelpText" className="sp-peoplepicker-initialHelpText ms-helperText">Type to enter a Name</span><img className="sp-peoplepicker-waitImg" id="idServiceLineApprover_TopSpan_WaitImage" alt="This animation indicates the operation is in progress. Click to remove this animated image." src="/_layouts/15/images/gears_anv4.gif?rev=44"><span id="idServiceLineApprover_TopSpan_ResolvedList" className="sp-peoplepicker-resolveList"></span><span id="idServiceLineApprover_TopSpan_NotificationSpan" aria-live="polite" style={{"visibility":"hidden","position":"absolute","width":"0px","display":"inlineblock"}}></span><input type="text" className="sp-peoplepicker-editorInput" size="1" autocomplete="off" value="" aria-required="true" id="idServiceLineApprover_TopSpan_EditorInput" title="Enter a name or email address..." autocorrect="off" autocapitalize="off" data-sp-peoplepickereditor="true"></div></div></div>
                            <input type="hidden" id="idServiceLineApproverDetails" value="">
                            <span id="" className="clsError" style={{"display": "none","color": "red"}}>Please enter Service Line Approver.</span>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 col-sm-12 mg20">
                    <a data-toggle="tooltip" data-html="true" title="" data-original-title="This will clear<br/> all the data from<br/> this screen." className="btn btn-tool mg5 hvr-underline-from-left " id="btnFirstClearAll" data-dismiss="modal">Clear All</a>						
                    <a data-toggle="tooltip" title="" data-original-title="
                        This will save the form as a draft for later submission." className="btn btn-tool mg5 hvr-underline-from-left " id="btnFirstSaveRequest" data-dismiss="modal">Save</a>						
                    </div></div>
                <div className="sf-0"></div></fieldset> </div>
            </div>
        );
    }
}
export default Request; 