import React from 'react';

import Todos from './components/Todos';

function App() {
	return (
		<div>
			<div className="container mt-3">
				<div className="row justify-content-center">
					<div className="col-6">
						<Todos />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
