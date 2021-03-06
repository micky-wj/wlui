import React, { PropTypes } from 'react';
import Editor from 'rsg-components/Editor';
// import Preview from 'rsg-components/Preview';
import Preview from 'rsg-components/LaoliziPreview';

const s = require('./Playground.css');

const PlaygroundRenderer = ({
	code,
	showCode,
	name,
	index,
	singleExample,
	evalInContext,
	onChange,
	onCodeToggle,
}) => (
	<div className={s.root}>
		<div className={s.preview + ' rsg--example-preview'}>
			<Preview code={code} evalInContext={evalInContext} />
		</div>
		{showCode ? (
			<div>
				<Editor code={code} onChange={onChange} />
				<button type="button" className={s.hideCode} onClick={onCodeToggle}>
					Hide code
				</button>
			</div>
		) : (
			<button type="button" className={s.showCode} onClick={onCodeToggle}>
				Show code
			</button>
		)}
	</div>
);

PlaygroundRenderer.propTypes = {
	code: PropTypes.string.isRequired,
	showCode: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	evalInContext: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onCodeToggle: PropTypes.func.isRequired,
	singleExample: PropTypes.bool,
};

export default PlaygroundRenderer;
