import { Panel, PanelHeader, PanelHeaderBack, Placeholder } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';

export const Avatar = ({ id,fetchedUser }) => {
  const { photo_200 } = { ...fetchedUser };
  const routeNavigator = useRouteNavigator();
  
  return (
    <Panel id={id}>
      {fetchedUser && (
        <Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
          <Cell before={photo_200 && <Avatar src={photo_200} />}></Cell>
        </Group>
      )}

      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
        Avatar
      </PanelHeader>

      <Placeholder>
        <img width={230} src={PersikImage} alt="Your photo" />
      </Placeholder>
    </Panel>
  );
};

Persik.propTypes = {
  id: PropTypes.string.isRequired,
};
