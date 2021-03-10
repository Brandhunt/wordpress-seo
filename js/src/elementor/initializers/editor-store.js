import { combineReducers, registerStore } from "@wordpress/data";
import { pickBy } from "lodash";
import reducers from "../../redux/reducers";
import * as selectors from "../../redux/selectors";
import * as actions from "../../redux/actions";
import * as snippetEditorActions from "../redux/actions/snippetEditor";
import * as analysisSelectors from "../redux/selectors/analysis";

/**
 * Populates the store.
 *
 * @param {Object} store The store to populate.
 *
 * @returns {void}
 */
const populateStore = store => {
	// Initialize the cornerstone content.
	store.dispatch( actions.loadCornerstoneContent() );
	// Initialize the focus keyphrase.
	store.dispatch( actions.loadFocusKeyword() );
	// Hide marker buttons.
	store.dispatch( actions.setMarkerStatus( "hidden" ) );

	store.dispatch(
		actions.setSettings( {
			socialPreviews: {
				sitewideImage: window.wpseoScriptData.metabox.sitewideSocialImage,
				authorName: window.wpseoScriptData.metabox.authorName,
				siteName: window.wpseoScriptData.metabox.siteName,
				contentImage: window.wpseoScriptData.metabox.firstContentImage,
				twitterCardType: window.wpseoScriptData.metabox.twitterCardType,
			},
			snippetEditor: {
				baseUrl: window.wpseoScriptData.metabox.baseUrl,
				date: window.wpseoScriptData.metabox.metaDescriptionDate,
				recommendedReplacementVariables: window.wpseoScriptData.analysis.plugins.replaceVars.recommendedReplaceVars,
				siteIconUrl: window.wpseoScriptData.metabox.siteIconUrl,
			},
		} )
	);

	// Initialize the Social Preview data depending on which platform should be present
	const { facebook: showFacebook, twitter: showTwitter } = window.wpseoScriptData.metabox.showSocial;
	if ( showFacebook ) {
		store.dispatch( actions.loadFacebookPreviewData() );
	}
	if ( showTwitter ) {
		store.dispatch( actions.loadTwitterPreviewData() );
	}

	store.dispatch( actions.setSEMrushChangeCountry( window.wpseoScriptData.metabox.countryCode ) );
	store.dispatch( actions.setSEMrushLoginStatus( window.wpseoScriptData.metabox.SEMrushLoginStatus ) );
};

/**
 * Initializes the Yoast SEO editor store.
 *
 * @returns {object} The Yoast SEO editor store.
 */
export default function initEditorStore() {
	const store = registerStore( "yoast-seo/editor", {
		reducer: combineReducers( reducers ),
		selectors: {
			...selectors,
			// Add or override selectors that are specific for Elementor.
			...analysisSelectors,
		},
		actions: pickBy( {
			...actions,
			// Add or override actions that are specific for Elementor.
			...snippetEditorActions,
		}, x => typeof x === "function" ),
	} );

	populateStore( store );

	return store;
}
