import { Request, Response } from 'express';
import Organization, { IOrganizationModel } from '../models/organization';

export const createOrganization = async (req: Request, res: Response) => {
  try {
    const organization: IOrganizationModel = new Organization(req.body);
    await organization.save();
    res.status(201).json(organization);
  } catch (error) {
    res.status(400).json({ message: 'Error creating organization', error });
  }
};

export const getOrganizations = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const organizations = await Organization.find().skip(skip).limit(limit);
    const total = await Organization.countDocuments();

    res.json({
      organizations,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching organizations', error });
  }
};

export const getOrganizationById = async (req: Request, res: Response) => {
  try {
    const organization = await Organization.findById(req.params.id);
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    res.json(organization);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching organization', error });
  }
};

export const updateOrganization = async (req: Request, res: Response) => {
  try {
    const organization = await Organization.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    res.json(organization);
  } catch (error) {
    res.status(400).json({ message: 'Error updating organization', error });
  }
};

export const deleteOrganization = async (req: Request, res: Response) => {
  try {
    const organization = await Organization.findByIdAndDelete(req.params.id);
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    res.json({ message: 'Organization deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting organization', error });
  }
};

