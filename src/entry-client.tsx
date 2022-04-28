import { hydrate } from 'solid-js/web';
import { StartClient } from 'solid-start/entry-client';
import '$css';

hydrate(() => <StartClient />, document);
