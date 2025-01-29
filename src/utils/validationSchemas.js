import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const registerValidationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  age: Yup.number()
    .min(18, 'You must be at least 18 years old')
    .required('Age is required'),
  zipCode: Yup.string().required('Zip code is required'),
  addressLine1: Yup.string().required('Address Line 1 is required'),
  addressLine2: Yup.string().notRequired(),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  country: Yup.string().required('Country is required'),
  ssn: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{4}$/, 'Invalid SSN format (XXX-XX-XXXX)')
    .required('SSN is required'),
  federalId: Yup.string()
    .matches(/^\d{2}-\d{7}$/, 'Invalid Federal ID format (XX-XXXXXXX)')
    .required('Federal ID is required'),
  referalCode: Yup.string().notRequired(),
});

export const addingBoatValidationSchema = Yup.object({
  Listing_Title: Yup.string().required('Listing Title is required'),
  Short_Name: Yup.string().required('Short Name is required'),
  Boat_Description: Yup.string().required('Description is required'),
  Max_Passengers_Capacity: Yup.number()
    .required('Max Passengers Capacity is required')
    .min(1, 'Must be at least 1 passenger'),
  Boat_Type: Yup.string().required('Boat Type is required'),
  Boat_Location: '',
  Motor_Type: '',
  Horse_Power: '',
  Boat_Rate: '',

  Boat_Make: Yup.string().required('Make Field is required'),
  Boat_Model: Yup.string().required('Model Field is requied'),
  Boat_Year: Yup.string().required('Year Field is requied'),
  Boat_HIN: Yup.string().required('HIN Field is requied'),
  DriverOption: Yup.string().required('Driver Option is required'),
  Motor_Make: Yup.string().required('Motor Make Field is requied'),
  Motor_Model: Yup.string().required('Model Field is requied'),
  Motor_Year: Yup.string().required('Year Field is requied'),
  Motor_Serial: Yup.string().required('Serial Field is requied'),
  Trailer_Make: Yup.string().required('Trailer Make Field is requied'),
  Trailer_Dual_Single_Axle: Yup.string().required(
    'Dual or Single Axle Field is requied',
  ),
  Trailer_Shocks: Yup.string().required('Shocks Field is requied'),
  Trailer_Surge_Brakes: Yup.string().required('Surge Brakes Field is requied'),
  Trailer_Year: Yup.string().required('Year Field is requied'),
  Trailer_VIN: Yup.string().required('VIN Field is requied'),
  Trailer_Spare_Wheel: Yup.string().required('add drop down here'),
  Trailer_Motor_Make: Yup.string().required(
    'Trailer Motor - Make Wheel Field is requied',
  ),
  Trailer_Motor_Model: Yup.string().required(
    'Trailer Motor - Model Wheel Field is requied',
  ),
  Trailer_Motor_Year: Yup.string().required(
    'Trailer Motor - Year Wheel Field is requied',
  ),
  Anchor_Brand_Model: Yup.string().required(
    'Anchor Brand and Model Field is requied',
  ),
  FFS_Make: Yup.string().required('FFS Make  Field is requied'),
  FFS_Model: Yup.string().required('FFS Model Field is requied'),
  FFS_Year: Yup.string().required('FFS Year Field is requied'),
  FFS_Graph1_Make: Yup.string().required('Graph 1 Make Field is requied'),
  FFS_Graph1_Model: Yup.string().required('Graph 1 Model Field is requied'),
  FFS_Graph1_Year: Yup.string().required('Graph 1 Year Field is requied'),
  FFS_Graph2_Make: Yup.string().required('Graph 2 Make Field is requied'),
  FFS_Graph2_Model: Yup.string().required('Graph 2 Model Field is requied'),
  FFS_Graph2_Year: Yup.string().required('Graph 2 Year Field is requied'),
  FFS_Graph3_Make: Yup.string().required('Graph 3 Make Field is requied'),
  FFS_Graph3_Model: Yup.string().required('Graph 3 Model Field is requied'),
  FFS_Graph3_Year: Yup.string().required('Graph 3 Year Field is requied'),
  FFS_Graph4_Make: Yup.string().required('Graph 4 Make Field is requied'),
  FFS_Graph4_Model: Yup.string().required('Graph 4 Model Field is requied'),
  FFS_Graph4_Year: Yup.string().required('Graph 4 Year Field is requied'),
  Insurance_Provider: Yup.string().required(
    'Insurance Provider Field is requied',
  ),
  Owner_Policy_Named: Yup.string().required(
    'Owner Policy Name Insured Field is requied',
  ),
  Policy_number: Yup.string().required('Policy number Field is requied'),
});
