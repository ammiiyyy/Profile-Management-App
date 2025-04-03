import { useState } from 'react';
import { Card, CardContent, Button, Input } from './components/ui';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


const initialProfiles = [
  { id: 1, name: 'John Doe', description: 'Web Developer', location: { lat: 51.505, lng: -0.09 } },
  { id: 2, name: 'Jane Smith', description: 'Graphic Designer', location: { lat: 51.515, lng: -0.1 } }
];

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function ProfileManagementApp() {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [newProfile, setNewProfile] = useState({ name: '', description: '', lat: '', lng: '' });

  const handleSelectProfile = (profile) => setSelectedProfile(profile);

  const handleAddProfile = () => {
    setProfiles([...profiles, { id: Date.now(), ...newProfile, location: { lat: parseFloat(newProfile.lat), lng: parseFloat(newProfile.lng) } }]);
    setNewProfile({ name: '', description: '', lat: '', lng: '' });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profiles.map(profile => (
          <Card key={profile.id} onClick={() => handleSelectProfile(profile)}>
            <CardContent>
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p>{profile.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProfile && (
        <MapContainer center={selectedProfile.location} zoom={13} className="h-96 mt-4">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={selectedProfile.location}>
            <Popup>{selectedProfile.name}</Popup>
          </Marker>
        </MapContainer>
      )}

      <div className="mt-4">
        <h2 className="text-xl font-bold">Add Profile</h2>
        <Input placeholder="Name" value={newProfile.name} onChange={e => setNewProfile({ ...newProfile, name: e.target.value })} />
        <Input placeholder="Description" value={newProfile.description} onChange={e => setNewProfile({ ...newProfile, description: e.target.value })} />
        <Input placeholder="Latitude" value={newProfile.lat} onChange={e => setNewProfile({ ...newProfile, lat: e.target.value })} />
        <Input placeholder="Longitude" value={newProfile.lng} onChange={e => setNewProfile({ ...newProfile, lng: e.target.value })} />
        <Button onClick={handleAddProfile}>Add Profile</Button>
      </div>
    </div>
  );
}
